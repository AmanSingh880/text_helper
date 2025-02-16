import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toLowerCase() + lower.slice(1);
    }
  return (
    props.alertmessag && <div className={`alert alert-${props.alertmessage.type} alert-dismissible fade show" role="alert`}>
        <strong>{capitalize(props.alertmessage.type)}</strong>:{props.alertmessage.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  )
}

export default Alert
