import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import Container from '../../components/Container';
import { NavLink, Navigate} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../redux/userSlice';
import { useAuth } from '../../hooks/use-auth';
import { useAppDispatch } from '../../hooks/redux-hooks';

const LoginPage = () => {

  const dispatch = useAppDispatch();
  
  const { isAuth } = useAuth();
  
  const onFinish = (values: any) => {
    const { email, password } = values;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
                user.getIdToken().then(accessToken => {
                    const userData = {
                        email: user.email,
                        id: user.uid,
                        token: accessToken
                  }
                    dispatch(setUser(userData));
                    localStorage.setItem("userId", userData.id);
                })
            })
      .catch(()=> alert("Пользоатель не существует"));
  };

  return (
    <div className='auth'>
      {isAuth && <Navigate to={'/'}/> }
      <Container>
        <div className='authOptions'>
          <Form
          name="normal_login"
          className="authForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
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
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Пароль"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Запомнить меня</Checkbox>
              </Form.Item>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="authFormButton">
                Войти
              </Button>
            </Form.Item>
          </Form>
          <div>
            <p className='authTxt'>Нет аккаунта?</p>
            <NavLink to="/signup" className='registerButton'>
              <button className='registerButton'>Регистрация</button>
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default LoginPage;