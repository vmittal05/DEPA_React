import React from 'react'
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes'

export default () => {
    return (
        <Menu style = {{ marginTop :'10px'}}>
            <Link route="/">
                <a className="item">
                    DEPA
                </a>
            </Link>

            <Menu.Menu position = "right">
                <Link route="/history">
                    <a className="item">
                        Transactions
                    </a>
                </Link>
                <Link route="/actionsHistory">
                    <a className="item">
                        History
                    </a>
                </Link>
                <Link route="/">
                    <a className="item">
                        Accounts
                    </a>
                </Link>
                
                <Link route="/accounts/new">
                    <a className="item">
                        Sign up
                    </a>
                </Link>
            </Menu.Menu>
        </Menu>
    );
}