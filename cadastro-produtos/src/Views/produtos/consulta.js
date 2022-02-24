import react from "react";

import ProdutosTable from "./produtosTable";
import Card from "../../components/Card";
import ProdutoService from "../../app/produtoService";
import withRouter from "../../components/withRouter";

class ConsultaProdutos extends react.Component{

    state = {
        produtos : []
    }

    constructor(){
        super()
        this.service = new ProdutoService();
    }

    componentDidMount(){
        const produtos = this.service.obterProdutos();
        this.setState({ produtos })
    }    

    preparaEditar = (sku) => {
        console.log('sku para editar: ' ,sku)
        this.props.router.navigate(`/cadastro-produtos/${sku}`);
    }

    deletar = (sku) => {
        const produtos = this.service.deletar(sku)
        this.setState({produtos})
    }
  
    render(){
        return ( 
            <Card header="Consulta Produtos">
                <ProdutosTable produtos={this.state.produtos} 
                               editarAction={this.preparaEditar}
                               deletarAction={this.deletar} />

            </Card>
        )
    }
}

export default withRouter(ConsultaProdutos);