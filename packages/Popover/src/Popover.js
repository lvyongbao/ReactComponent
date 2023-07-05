import React from 'react';
import { Popover, Button } from 'antd';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
  content: PropTypes.node,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
};
class PPopver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    const { children, title, content, onOk, onCancel, ...otherPops } = this.props;

    const { visible } = this.state;
    const thiz = this;

    const mainContent = (
      <React.Fragment>
        {title && <div style={{ fontWeight: 'bold' }}>{title}</div>}
        {content && <div>{content}</div>}
        <div style={{ textAlign: 'right', marginTop: '30px' }}>
          <Button
            onClick={() => {
              thiz.setState({
                visible: false,
              });
              onOk && onOk();
            }}
            type="primary"
            size="small"
            style={{ marginRight: '5px' }}
          >
            确定
          </Button>
          <Button
            onClick={() => {
              thiz.setState({
                visible: false,
              });
              onCancel && onCancel();
            }}
            size="small"
          >
            取消
          </Button>
        </div>
      </React.Fragment>
    );

    const popoverProps = {
      visible,
      content: mainContent,
      overlayStyle: {
        minWidth: '220px',
      },
      ...otherPops,
      onVisibleChange(v) {
        thiz.setState({
          visible: v,
        });
      },
    };
    return (
      <React.Fragment>
        <Popover {...popoverProps}>{children}</Popover>
      </React.Fragment>
    );
  }
}

PPopver.propTypes = propTypes;
export default PPopver;
