import React, { useState, useEffect, forwardRef  } from 'react';
import { Input } from 'antd';
import propTypes from 'prop-types';

const { TextArea } = Input;

const InputCount = forwardRef(({
  inputType,
  maxLimit,
  onChange,
  defaultValue,
  ...otherProps
}, ref) => {
	const [curNum, setCurNum] = useState(0);
  const [value, setValue] = useState('');
  useEffect(() => {
    setCurNum(defaultValue ? defaultValue.length : 0);
    setValue(value)
  }, [defaultValue]);

  const onChanges = e => {
    setValue(e.target.value);
    setCurNum(e.target.value.length);
    onChange(e.target.value);
  };
  const InputCountProps = {
    maxLength: maxLimit || null,
    suffix: maxLimit ? (
      <span>
        <span style={{ opacity: '0.45' }}>{curNum}</span>
        {`/${maxLimit}`}
      </span>
    ) : null,
    onChange: (e) => {
      onChanges(e);
    },
    defaultValue,
    ...otherProps
  };
  if (inputType === 'textarea') {
    return (
      <div style={{ position: 'relative' }}>
        <TextArea {...InputCountProps} />
        <span
          style={({ right: '10px', bottom: '5px', lineHeight: '20px', position: 'absolute' })}
        >
          <span style={{ opacity: '0.45' }}>{curNum}</span>
          {`/${maxLimit}`}
        </span>
      </div>
    );
  }
  return (
    <>
      <Input {...InputCountProps} />
    </>
  );
})

InputCount.defaultProps = {
  inputType: 'input',
  maxLimit: '',
  onChange: () => undefined,
  placeholder: '',
};

InputCount.propTypes = {
  inputType: propTypes.string,
  maxLimit: propTypes.number,
  onChange: propTypes.func,
  placeholder: propTypes.string,
};

export default React.memo(InputCount);
