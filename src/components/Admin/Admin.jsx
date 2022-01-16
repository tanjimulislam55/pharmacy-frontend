import classes from './Admin.module.css'
import Item from './Item/Item'
import UserList from './List/UserList'

export default function Admin() {
    return (
        <div>
            <div>
                <Item />
            </div>
            <div>
                <UserList />
            </div>
        </div>
    )
}
