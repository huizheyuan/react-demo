import { Component } from "react";


function ProductCategoryRow(props) {
    return (
        <tr>
            <th colSpan="2">
                {props.category}
            </th>
        </tr>
    )
}

function ProductRow(props) {
    const product = props.product;
    const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
            {product.name}
        </span>;
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

class ProductTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            productList: [
                {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
                {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
                {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
                {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
                {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
                {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
            ]
        }
    }
    render() {
        const rows = [];
        let lastCategory = null;
        
        this.state.productList.forEach((e) => {
            if (e.name.indexOf(this.props.filterText) === -1) return;
            if (this.props.inStockOnly && !e.stocked) return;
            if (e.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow category={e.category} key={e.category} />
                );
            }
            rows.push(
                <ProductRow product={e} key={e.name} />
            );
            lastCategory = e.category;
        });
        return (
            <>
                <table border="0" cellpadding="5" cellspacing="0" style={{'marginTop':'10px'}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </>
        )
    }
}

class SearchBar extends Component {
    render() {
        return (
            <>
                <input value={this.props.filterText} onChange={(e)=>this.props.handleInput(e.target.value)} placeholder="Search..." /><br/>
                <input type='checkbox' value={this.props.inStockOnly} onChange={(e)=>this.props.handleCheck(e.target.value)} style={{'marginLeft':'0'}} />
                Only show products in stock
            </>
        )
    }
}

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };
    }
    handleInput(val) {
        this.setState({filterText: val})
    }
    handleCheck(val) {
        this.setState({inStockOnly: val})
    }
    render() {
        return (
            <>
                <SearchBar 
                    filterText={this.state.filterText} 
                    inStockOnly={this.state.inStockOnly} 
                    handleInput={(val)=>this.handleInput(val)}
                    handleCheck={(val)=>this.handleCheck(val)}
                />
                <ProductTable 
                    filterText={this.state.filterText} 
                    inStockOnly={this.state.inStockOnly} 
                />
            </>
        )
    }
}

export default FilterableProductTable;