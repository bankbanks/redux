import React from 'react'
import {connect} from 'react-redux'
function CounterDisplay(props) {
    return (
        <>
            <div style={{
                backgroundColor: '#385898',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                border: '1px solid hsl(0,0%,90%)',
                borderRadius: '5px 5px 0 0 ',
                width: '350px',
                height: '200px',
                margin: '0 auto'
            }}>
                <h1 style={{ fontSize: "4rem", color: 'wheat' }}>{props.ctr}</h1>
            </div>
            <div style={{
                backgroundColor: 'lightgray',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                border: '1px solid hsl(0,0%,90%)',
                borderRadius: '0 0 5px 5px ',
                width: '350px',
                height: '50px',
                margin: '0 auto'
            }}>
            </div>
            <div style={{
                backgroundColor: 'lightgray',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                border: '1px solid hsl(0,0%,90%)',
                width: '20px',
                height: '50px',
                margin: '0 auto'
            }}>
            </div>
            <div style={{
                backgroundColor: 'lightgray',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                border: '1px solid hsl(0,0%,90%)',
                borderRadius: '0 0 5px 5px ',
                width: '120px',
                height: '10px',
                margin: '0 auto'
            }}>
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}
export default connect(mapStateToProps)(CounterDisplay)