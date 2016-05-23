var React=require("react");
 var CommentForm=React.createClass({
     
      getInitialState:function(){
         return{
                 author:"",
                 text:""
               }  
      },
      handleAuthorChange:function(e){
          this.setState({author:e.target.value});
      },
      handleTextChange:function(e){
          this.setState({text:e.target.value});
      },
      
       handleSubmit:function(e){
            e.preventDefault();
             
           /*send data to the handlesubmit function in the comment box where the actual post
           request is going to take place*/
             this.props.handleSubmit({author:this.state.author,
                                     text:this.state.text},e);
             this.setState({author:"",text:""});
            
       },
      render:function(){
          return(
               <form className="commentForm" onSubmit={this.handleSubmit}>
                   <input type="text" placeholder="enter name here.." onChange={this.handleAuthorChange} value={this.state.author}/>
                   <input type="text" placeholder="say something.." onChange={this.handleTextChange}
                        value={this.state.text}/>
                   <input type="submit" value="post" />
               </form>
         
           )
      }
 });

module.exports=CommentForm;