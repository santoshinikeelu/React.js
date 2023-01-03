import React from "react"
 class FormComponent extends React.Component{
    constructor(){
        super();
        this.state={
            InputText:"",
            ShowPreviewText:false
        }
    }
    handleFormSubmit(event){
        event.preventDefault();
        console.log("form submitted")
        this.setState({
            ShowPreviewText:true
        })
        }
        handleFormReset(event){
            event.preventDefault();
            console.log("form resetted")
            this.setState({
                ShowPreviewText:true,
                InputText:""
            })
        }
        ChangeHandler(value){
            this.setState({
                InputText:value
            })
        }
      render(){
        return(
        <div className="form-container">
            <form
                onSubmit={(event)=>this.handleFormSubmit(event)}
               onReset={(event)=>this.handleFormReset(event)}
                >
                <input
                placeholder="enter some value"
                type="text"
                value={this.state.InputText}
                onChange={(event)=>this.ChangeHandler(event.target.value)}
                />
               <button type="submit">Submit</button>
            <button type="reset">Reset</button>

                
            </form>
            
            <div><h2>
                Show Preview Text
            </h2>
            <p>{this.state.InputText.toUpperCase()}</p>
            
               
            </div>
        </div>

        )
    }
 }
 export default FormComponent