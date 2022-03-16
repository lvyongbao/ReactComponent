import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const { TextArea } = Input;
const propTypes = {
  maxLimit: PropTypes.number,
  onChange: PropTypes.func,
  inputType: PropTypes.string,
};
class CountInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curNum: 0,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {defaultValue} = nextProps;
    // 当传入的defaultValue发生变化的时候，更新state
    if (defaultValue !== prevState.defaultValue) {
      return {
        curNum: defaultValue.length,
        defaultValue,
      };
    }
    // 否则，对于state不进行任何操作
    return null;
  }
  getChange = (e) => {
    this.setState({
      value:e,
      curNum: e.length
    })
  }
  render() {
    const {
      maxLimit,
      onChange,
      inputType, // 传入‘textarea’则显示为文本域
      ...otherPops
    } = this.props;

    const { curNum,defaultValue } = this.state;

    const CountInputProps = {
      maxLength: maxLimit || null,
      suffix: maxLimit ? <span style={{ opacity: '0.45' }}>{`${curNum}/${maxLimit}`}</span> : null,
      onChange: (e) => {
        onChange && this.getChange(e.target.value);
      },
      defaultValue,
      ...otherPops,
    };
    if (inputType === 'textarea') {
      return (
        <div style={{ position: 'relative' }}>
          <TextArea {...CountInputProps} />
          <span
            style={{ position: 'absolute', right: '10px', bottom: '0px', lineHeight: '20px', opacity: '0.45' }}
          >{`${curNum}/${maxLimit}`}</span>
        </div>
      );
    }
    return <Input {...CountInputProps} />;
  }
}

CountInput.propTypes = propTypes;
CountInput.defaultProps = {
  inputType: undefined,
  onChange: () => {},
  maxLimit: null,
};
export default CountInput;
