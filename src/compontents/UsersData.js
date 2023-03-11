import axios from 'axios'
import DataTable from 'react-data-table-component';
import React, { Fragment } from 'react'
import DataTableExtensions from "react-data-table-component-extensions";
import './style.css'


const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

export default class UsersData extends React.Component {
    constructor() {
        super()
       this.state = {
           users:[],
           Logout:()=>{
            window.location.replace('/login') 
           }
       }
       this.columns = [
        {
            name: 'Author',
            selector: row => row.author,
        },
        {
            name: 'Date',
            selector: row => row.publishedAt,
        },
        {
            name: 'SourceName',
            selector: row => row.source.name,
        },
        {
            name: 'Title',
            selector: row => row.title,
        },
       ]
    }
    
 
   
    render() {
        return (
            <Fragment>
                <h1>The All Data of News Also Can search Any Data on Table &nbsp; &nbsp;&nbsp;  <button onClick={this.state.Logout}>Logout</button></h1>
                <br/><br/><br/>
                 <DataTableExtensions
            columns={this.columns}
            data={this.state.users}
            print={false}
            export={false}
          >
            <DataTable
            columns={this.columns}
            data={this.state.users}
            expandableRows
            expandableRowsComponent={ExpandedComponent}
            selectableRows
        />
        </DataTableExtensions>
            </Fragment>
            
       )
    }

    componentDidMount(){
        let token = localStorage.getItem('token');
        console.log(token)
        axios.get('http://127.0.0.1:8000/api/get-news', { headers: {"Authorization" : `Bearer ${token}`} })
        .then((response)=>{
            this.setState({users:response.data.news})
            console.log(response.data.news)
        })
        .catch((err)=>{
            console.log(err)
        })
}
}

