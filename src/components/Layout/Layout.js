import React from 'react';
import Auxi from '../../hoc/Auxi';

export default function Layout(props) {
    return (
        <Auxi>
        <div>
            toolbar
        </div>

        <main>
            {props.children}
        </main>
        </Auxi>

    )
}
