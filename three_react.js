/* 普通加dom元素 */
var element = <h1>这是第三个文件</h1>;
ReactDOM.render(
    element,
    document.getElementById('three')
);

/* 数组 */
var element2  = [
    <h1>这是数组</h1>,<h2>测试</h2>
];

ReactDOM.render(
    element2,
    document.getElementById("arr")
);
/* 样式 */

var myStyle = {
    color:"#abcdef",
    fontSize:100
};

ReactDOM.render(
    <h1 style={myStyle}>这是样式</h1>,
    document.getElementById("thisStyle")
);
var i=2;
/* 判断三目运算符 */
ReactDOM.render(
    <div>
        <span>{i==1?"true!":"false!"}</span>
    </div>,
    document.getElementById("conditional")
);