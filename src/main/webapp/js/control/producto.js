/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var control_producto_list = function(path) {
    //contexto privado

    var prefijo_div = "#producto_list ";
    var clase = "producto";
    var btn = [{"class": "btn btn-mini action05", "icon": "", "text": "compras"}];

    function cargaCompras(id) {

        var compra = objeto('compra', path);
        var compraView = vista(compra, path);

        $('#indexContenidoJsp').empty();
        $('#indexContenido').empty().append(compraView.getEmptyList());

        var compraControl = control_compra_list(path);
        compraControl.inicia(compraView, 1, null, null, 10, null, null, null, null, "id_cliente", "equals", id);
        return false;

    }

    return {
        inicia: function(view, pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue) {
            inicia(view, pag, order, ordervalue, rpp, filter, filteroperator, filtervalue, callback, systemfilter, systemfilteroperator, systemfiltervalue, prefijo_div, clase, btn);
            if (!callback) {
                $(prefijo_div + '.btn.btn-mini.action05').unbind('click');
                $(prefijo_div + '.btn.btn-mini.action05').click(function() {
                    cargaCompras($(this).attr('id'));
                });
            }
        }
    };
};

