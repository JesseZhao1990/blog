## 受控组件

在HTML中，表单元素（如<input>,<textarea>和<select>）之类的表单元素通常自己维护state，并根据用户输入进行更新。而在react中。可变状态（mutable state) 通常保存在组件的state属性中，并且只能通过使用setState来更新


我们可以把两者结合起来，使react的state成为“唯一数据源”。渲染表单的react组件还控制着用户输入过程中表单发生的操作。被react以这种方式控制取值的表单输入元素就叫做“受控组件”
