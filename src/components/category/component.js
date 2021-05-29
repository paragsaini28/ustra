import React, { useEffect, useState } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { mainPageApi } from './action'
import Grid from '@material-ui/core/Grid';
import { Button, Card } from '@material-ui/core';
import './component.css'

const abc = {
    gridList: {
        backgroundColor: "white",
        overflow: "auto",
        whiteSpace: "nowrap"
    },
    new: {
        display: "inline-block",
        color: "white",
        padding: '2px',
        position: "relative",
        textAlign: "center"
    },
    textimg: {
        position: "absolute",
        top: "50px",
        left: "50px",
        transform: "translate(-50 %, -50 %)"
    }
}

export default function Header() {
    const [category, setCategory] = useState([])
    const [list, setList] = useState([])

    useEffect(() => {
        mainPageApi().then((response) => {
            setCategory(response.data.category_list)
            setList(response.data.product_list)
            console.log(response)
        })
    }, [])

    console.log("category", category)
    console.log("list", list)
    return (
        <div>
            <div style={abc.gridList}>
                {category.length > 0 ?
                    category.map((value, index) => {
                        return (
                            <div style={abc.new} >
                                <img className="catimg" src={value.category_image} />
                                <div style={{ position: 'absolute', top: "50%", left: '50%', transform: 'translate(-50%,-50%)' }}>{value.category_name}</div>
                            </div>
                        )
                    })
                    :
                    null
                }
            </div>
            {/* </div> */}
            <br />
            <div>
                {list.count > 0 ?
                    <Grid container spacing={3}>
                        {list.products.map((data, index) => {
                            return <Grid item sm={6} md={6} lg={4}>
                                <div className='main'>
                                    <div className='img' style={{ display: 'flex', justifyContent: 'center' }}>
                                        <img src={data.image_urls.x200} />
                                    </div>
                                    <br />
                                    <div className="text">
                                            <div style={{textAlign:"center"}}>
                                                {data.name}
                                            </div>
                                            <div style={{textAlign:"center"}}>
                                                &#8377;{data.final_price}  <del>&#8377;{data.price}</del>
                                            </div>
                                            <div style={{textAlign:"center"}}>
                                                {data.is_in_stock ?
                                                    <Button style={{ width: "25vh", backgroundColor: '#2ac32a' }}> <span style={{ color: 'white' }}>Add to cart</span></Button>
                                                    :
                                                    <Button style={{ width: "25vh", backgroundColor: 'grey' }} disabled={true}>Out of Stock</Button>
                                                }
                                            </div>
                                        
                                    </div>
                                </div>
                            </Grid>
                        })}
                    </Grid>
                    : null}

            </div>
        </div>
    )

}