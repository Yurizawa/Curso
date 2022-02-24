import React from "react";

import Card from "../../components/Card";
import ProdutoService from "../../app/produtoService";
import withRouter from "../../components/withRouter";

const estadoInicial = {
    nome: '',
    sku: '',
    descrição: '',
    preço: 0,
    fornecedor: '',
    sucesso: false,
    errors: [],
    atualizando : false
}

class CadastroProduto extends React.Component {

   state = estadoInicial;

   constructor(){
       super()
       this.service = new ProdutoService();
   }

    onChange = (Event) => {
        const valor = Event.target.value
        const nomeDoCampo = Event.target.name 
        this.setState({ [nomeDoCampo]: valor   })
    }

    onSubmit = (Event) => {
        Event.preventDefault();
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descrição: this.state.descrição,
            preço: this.state.preço,
            fornecedor: this.state.fornecedor
        }
        try{
            this.service.salvar(produto)
            this.limpaCampos()
            this.setState({ sucesso: true })
        }catch(erro){
            const errors = erro.errors
            this.setState({errors : errors})

        }      
    }

    limpaCampos = () => {
        this.setState(estadoInicial)
    }

    componentDidMount(){
        console.log(this.props)
        const sku = this.props.router.params.sku

        if(sku){
            const resultado = this
                    .service
                    .obterProdutos().filter( produto => produto.sku === sku )
            if(resultado.length === 1){
                const produtoEncontrado = resultado[0]
                this.setState({ ...produtoEncontrado, atualizando : true })
            }
        }
    }
     
    render(){
        return(
            <Card header={this.state.atualizando ? 'Atualização de Produto ' : 'Cadastro de Produto '}>
                    <form id="frmProduto" onSubmit={this.onSubmit} >

                    { this.state.sucesso && 
                        
                        <div className="alert alert-dismissible alert-success">
                            <button type="button" className="btn-close" data-bs-dismiss="alert">&times;</button>
                            <strong>Bem Feito!</strong> Cadastro realizado com sucesso! 
                        </div>
                        
                    }       
                
                    { this.state.errors.length > 0 &&
                        
                        this.state.errors.map( msg => {
                            return (                        
                                <div className="alert alert-dismissible alert-danger">
                                    <button type="button" class="btn-close" data-bs-dismiss="alert">&times;</button>
                                    <strong>Erro!</strong> {msg}
                                </div>
                            )                        
                        })
                        
                        
                    }    

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Nome: *</label>
                                    <input type="text"
                                        name="nome" 
                                        onChange={this.onChange}
                                        value={this.state.nome} 
                                        className="form-control" />                            
                                </div>
                            </div>
                        
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>SKU: *</label>
                                    <input type="text"
                                        name="sku"
                                        disabled={this.state.atualizando}
                                        onChange={this.onChange}
                                        value={this.state.sku}
                                        className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Descrição:</label>
                                    <textarea name="descrição"
                                            onChange={this.onChange}
                                            value={this.state.descrição} 
                                            className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Preço: *</label>
                                    <input type="text" 
                                        name="preço"
                                        onChange={this.onChange}
                                        value={this.state.preço}
                                        className="form-control" />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Fornecedor: *</label>
                                    <input type="text" 
                                        name="fornecedor"
                                        onChange={this.onChange}
                                        value={this.state.fornecedor}
                                        className="form-control" />
                                </div>
                            </div>

                        </div>

                        <div className="row mt-1">
                            <div className="col-md-1">
                                <button type="submit" className="btn btn-success" >
                                    {this.state.atualizando ? 'Atualizar' : 'Salvar' }
                                </button>
                            </div>

                            <div className="col-md-1">
                                <button onClick={this.limpaCampos} className="ms-4 btn btn-primary" >Limpar</button>
                            </div>
                        </div>
                    
                    </form>
            </Card>           
        )
    }
}

export default withRouter(CadastroProduto);