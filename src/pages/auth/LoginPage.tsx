import { useEffect } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Spin } from 'antd';
import Container from '../../components/Container';
import { NavLink, Navigate} from 'react-router-dom';
// import { useAuth } from '../../hooks/use-auth';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { IAccessCredentials, Status } from '../../types';
import { authoriseUserViaFirebase } from '../../redux/user/userOperations';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  // const { isAuth } = useAuth();
  const { status, error } = useAppSelector(state => state.user);

  useEffect(() => {
    if (error) {
      toast(error)
    }
  }, [error])

  const onFinish = (values: IAccessCredentials) => {
    dispatch(authoriseUserViaFirebase(values));
  }

  return (
    <div className='auth'>
      {status === Status.RESOLVED && <Navigate to={'/'}/> }
      <Container>
        <div className='authOptions'>
          <Form
          name="normal_login"
          className="authForm"
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
              <Button type="primary" htmlType="submit" className="authFormButton">
                {status === Status.LOADING && <Spin size='small'/>}
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