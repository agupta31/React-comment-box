var React=require("react");
var Comment=require("./Comment");

var CommentList=React.createClass({
       
       render:function(){
              var commentItems=this.props.commentData.map(function(items){
                     return <Comment author={items.author} text={items.text}/>
              });
              return(
                    <div className="commentlist">
                      {commentItems}
                    
                    </div>
               )
             }
});

module.exports=CommentList;