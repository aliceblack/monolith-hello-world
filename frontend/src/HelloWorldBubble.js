import { GenericBubble, WebNotification, InputText, TextView, Button, GUIContainer } from 'monolith-frontend';
import React from 'react';


export default class HelloWorldBubble extends GenericBubble {
    constructor(props) {
        super(props);
        this.state = {
            alive: true,
        };
    }

    handleTextChange(text) {
        this.setState({
            name: text,
        });
    }

    handleButtonClick() {
        this.setState({
            alive: false,
        });
    }

    resetBubble() {
        this.setState({
            alive: true,
            name: '',
        });
    }

    aliveRender() {
        return (
            <GUIContainer>
                <TextView text="Please enter your name here:" />
                <InputText id="name" onTextChange={this.handleTextChange.bind(this)} />
                <Button text="Submit" callback={() => this.handleButtonClick()}/>
            </GUIContainer>
        );
    }

    notAliveRender() {
        new WebNotification('There\'s something new').notify();
        const text = `Hi, ${this.state.name}. Say hi to monolith! :D`;
        return (
            <GUIContainer>
                <TextView text={text} />
                <Button text="Restore Bubble" callback={() => this.resetBubble()} />
            </GUIContainer>
        );
    }
}
