import './App.css'
import CartProduct from './components/CartProduct'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'


function App() {

  return (
    <div>
     {/* <button className="q-button q-button-primary active:bg-violet-700">Them moi</button>
     <input className="q-input" type="text" placeholder='tim kiem' /> */}
     <NavBar/>
     {/* <CartProduct/> */}
     <ProductList/>
     <Footer/>
    </div>
  )
}

// export default App
// import React from 'react';
// import { Button, notification, Space } from 'antd';
// const App = () => {
//   const [api, contextHolder] = notification.useNotification();
//   const openNotificationWithIcon = (type) => {
//     api[type]({
//       message: 'Notification Title',
//       description:
//         'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
//     });
//   };
//   return (
//     <>
//       {contextHolder}
//       <Space>
//         <Button className=" active:bg-violet-700" onClick={() => openNotificationWithIcon('success')}>Success</Button>
//         <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
//         <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
//         <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
//       </Space>
//     </>
//   );
// };
export default App;
// import React from 'react';
// import { BackwardOutlined, CaretUpOutlined, FastBackwardOutlined, SmileOutlined, StepForwardOutlined } from '@ant-design/icons';
// import { Button, notification } from 'antd';
// const App = () => {
//   const [api, contextHolder] = notification.useNotification();
//   const openNotification = () => {
//     api.open({
//       message: 'Notification Title',
//       description:
//         'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
//       icon: (
//         <SmileOutlined
//           style={{
//             color: '#108ee9',
//           }}
//         />
//       ),
//     });
//   };
//   return (
//     <>
//       {contextHolder}
//       <Button type="primary" onClick={openNotification}>
//         Open the notification box
//       </Button>
//       <StepForwardOutlined />
//       <BackwardOutlined />
//     </>
//   );
// };
// export default App;
