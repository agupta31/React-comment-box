var React=require("react");
var CommentList=require("./CommentList");
var CommentForm=require("./CommentForm");

var CommentBox=React.createClass({
    
     loadDataFromTheServer:function(){
          $.ajax({
                url:this.props.url,
                dataType:"json",
                cache:false,
                success:function(data){
                      this.setState({data:data});
                }.bind(this),
                error:function(xhr,status,err){
                     console.error(this.props.url,status,err.toString());
                }.bind(this)
                     
          });
     },
     handleCommentSubmit:function(comment){
//             $.ajax({
//                  url:this.props.url,
//                  dataType:"json",
//                  type:"POST",
//                  data:comment,
//                  success:function(data){
//                        this.setState({data:data});
//                  }.bind(this),
//                  error:function(xhr,status,err){
//                      console.error(this.props.url,status,err.toString());
//                  }.bind(this)
//                   
//             });

             this.state.data.push(comment);
             this.setState({data:this.state.data});
      },
     getInitialState:function(){
        return {
            
             data:[]
        }
    },
     componentDidMount:function(){
            this.loadDataFromTheServer();
           
     },
    
      
       render:function(){
        return(
              <div className="commentBox">
               <h1>Comments</h1>
               <CommentList commentData={this.state.data}/>
               <CommentForm handleSubmit={this.handleCommentSubmit}/>
               </div>
              )
    }
});

module.exports=CommentBox;