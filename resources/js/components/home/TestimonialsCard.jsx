import React from 'react'

const TestimonialsCard = ({ image, text, name, username }) => {
    return (
        <div>
            <div class="css-1gnkfvm">
                <p class="css-vurnku">{text}.</p>
                <div class="css-ljyqfc">
                    <div class="css-1rl56xl">
                        <img src={image} alt="Minnie Horn" class="css-9taffg" />
                    </div>
                    <div class="css-1cmdwej">
                        <h3 class="css-1wf7gym">{name}</h3>
                        <p class="css-vurnku">{username}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsCard