# CountInput

### 特点

- 扩展 antd 的 Input 和 Textarea，支持显示最大输入限制实时计数功能

### demo：

```javascript
<Input maxLimit={20} />
<Input inputType='textarea' maxLimit={200} />
```

### API

| 参数      | 说明                   | 类型   | 默认值 |
| --------- | ---------------------- | ------ | ------ |
| maxLimit  | 最大字数限制           | number | 无     |
| inputType | 显示为输入框还是文本域 | string | 无     |
| defaultValue | 默认value值 | string | 无 |
