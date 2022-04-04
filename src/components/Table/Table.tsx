import React from "react";
import { IUser } from "../../models/intefaces";

interface TableProps{
    allUsers: IUser[];
    onDeleteHadler: (id: string) => void;
}

const Table: React.FC<TableProps> = ({allUsers, onDeleteHadler}) => {
    return (
        <>
            {allUsers.length < 1 ? 
            <p>No registered users</p> 
            :<table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date of birth</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.dateofbirth}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <button
                                        onClick={()=>onDeleteHadler(user.id)}
                                    >Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        
        }
        </>

    )
}

export default Table