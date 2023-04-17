function Message() {
  const name = "Nipun";

  if (name) return <h1>Hello {name}</h1>; //JSX: JAVAScript XML, this is complie to javascript
  return <h1>Hello World</h1>;
}

export default Message;
