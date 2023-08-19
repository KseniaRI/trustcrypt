import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Button, Form, Input } from 'antd';
import Container from '../../components/Container';
import { setUser } from '../../redux/userSlice';
import { useAuth } from '../../hooks/use-auth';
import { Navigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { addUserToFirebase } from '../../services/firebase/firebaseUserOperations';

const SignupPage = () => {

    const dispatch = useAppDispatch();

    const { isAuth } = useAuth();

    const onFinish = (values: any) => {
        const { email, password } = values;
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                user.getIdToken().then(accessToken => {
                    const userData = {
                        email: user.email,
                        id: user.uid,
                        token: accessToken
                    }
                    addUserToFirebase(userData);
                    dispatch(setUser(userData));
                    localStorage.setItem("userId", userData.id);
                    alert(`Создан новый аккаунт с ${user.email}`)
                })
            })
            .catch(console.error);
    };

    return (
        <div className='auth'>
            {isAuth && <Navigate to={'/'}/> }
            <Container>
                <div className='authOptions'>
                    <Form
                        className="authForm"
                        onFinish={onFinish}
                        name="register"
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                  type: 'email',
                                  message: 'Использован неверный формат электроной почты!',
                                },
                                {
                                  required: true,
                                  message: 'Введите адрес электронной почты!',
                                }
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="e-mail"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Введите пароль!' }]}
                            hasFeedback
                        >
                            <Input.Password
                              prefix={<LockOutlined className="site-form-item-icon" />}
                              type="password"
                              placeholder="Пароль"
                            />
                        </Form.Item>
                        <Form.Item
                            name="confirm"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                  required: true,
                                  message: 'Подтвердите пароль!',
                                },
                                ({ getFieldValue }) => ({
                                  validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                      return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Пароли не совпадают!'));
                                  },
                                }),
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                placeholder="Подтвердите пароль"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="authFormButton">
                              Зарегистрироваться
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Container>
        </div>
    );
}

export default SignupPage;