import React from "react";
import ImgView from '../src/ImgView';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';

const Demo = (props) => {
  return (
    <ConfigProvider locale={zhCN}>
      <div style={{ width: '500px', margin: '30px' }}>
        <ImgView src="https://lvyongbao.com/picture/me.jpg" width={200} height={200} />
      </div>
    </ConfigProvider>
  );
}

export default Demo;
