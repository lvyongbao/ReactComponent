import React from "react";
import Popover from '../src/Popover';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';

const Demo = (props) => {
  return (
    <ConfigProvider locale={zhCN}>
      <div style={{ width: '500px', margin: '30px' }}>
        <Popover
          title={' 确定要删除这个频道吗？'}
          onOk={() => {
            handleDelete()
          }}
        >
          <a>删除</a>
        </Popover>
      </div>
    </ConfigProvider>
  );
}

export default Demo;
