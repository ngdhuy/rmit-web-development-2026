/**
 * * define Clock componnent for Footer
 */

import React, { type ReactNode } from "react"

import './style.css'

type Type = { date: Date }

export default class Clock extends React.Component<Type> {
    // define state {statement of class component, look like a attribute of class}
    state : Type = { 
        date: new Date() 
    }

    timerID !: number 

    // define constuctor of class
    public constructor(props : Type) {
        super(props)
    }

    // define event-handler pre-render
    public componentDidMount(): void {
        this.timerID = setInterval(() => this.timer_tick(), 1000)
    }

    // define event-handler after-render
    public componentWillUnmount(): void {
        clearInterval(this.timerID)
    }

    // define timer_tick
    public timer_tick() {
        this.setState({ date : new Date() })
    }

    public render() : ReactNode {
        return (
            <div className = 'timer'>
                Now is <span>{this.state.date.toLocaleTimeString()}</span>
            </div>
        )
    }
}