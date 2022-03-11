import React from "react";
import InputCount from '../src/InputCount';

const Demo = (props) => {
  return (
    <>
      <div style={{ width: '500px', margin: '30px' }}>
        <InputCount maxLimit={200} defaultValue="12345" inputType="textarea" rows={5} placeholder="请输入" />
      </div>
      <div style={{ width: '500px', margin: '30px' }}>
        <InputCount maxLimit={20}  placeholder="请输入" />
      </div>
    </>
  );
}

export default Demo;
