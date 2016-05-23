var React=require("react");
var CommentBox=require("./CommentBox");
  

ReactDOM.render(
    <CommentBox url="src/comment.json"/>,
    document.getElementById("target")
);
