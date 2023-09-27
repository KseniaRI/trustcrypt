import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Spin } from 'antd';
import { createNewUserViaFirebase } from '../../redux/user/userOperations';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { getUserError, getUserStatus } from '../../redux/user/userSelectors';
import { IAccessCredentials, Status } from '../../types';
import Container from '../../components/Container';
import { toast } from 'react-toastify';

const SignupPage = () => {

    const dispatch = useAppDispatch();
    const userStatus = useAppSelector(getUserStatus);
    const userError = useAppSelector(getUserError);
    
    const onFinish = (values: IAccessCredentials) => {
        dispatch(createNewUserViaFirebase(values));
    }
    
    useEffect(() => {
        if (userError) {
            toast.error(userError);
        }
    }, [userError])

    return (
        <div className='auth'>
            {userStatus === Status.RESOLVED && <Navigate to={'/'} />}
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
                                {userStatus === Status.LOADING && <Spin size='small'/>}
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