import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweet } from '../actions/tweets'
import { Redirect } from 'react-router-dom'

class NewTweet extends Component {
    state = {
        text:"",
        toHome: false
    }

    handleChange = (e) => {
        const text = e.target.value
        
        this.setState(() => ({
            text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { text } = this.state
        const { dispatch, id } = this.props
        // console.log('The new tweet is: ', text)
        dispatch(handleAddTweet(text, id))
        this.setState(() => ({
            text: '',
            toHome: id ? false : true
        }))
    }

    render() {
        const { text, toHome } = this.state
        if(toHome === true){
            return <Redirect to='/' />
        }

        const tweetLeft = 280 - text.length

        return(
            <div>
                <h3 className='center'>Compose New Tweet</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <textarea
                    placeholder='What is happening?'
                    onChange={this.handleChange}
                    value={text}
                    className='textarea'
                    maxLength = {280}
                    />
                    {tweetLeft <= 100 && (
                        <div className='tweet-length'>
                            {tweetLeft}
                        </div>)}
                    <button 
                        className='btn'
                        type='submit'
                        disabled={text === ' '}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(NewTweet)