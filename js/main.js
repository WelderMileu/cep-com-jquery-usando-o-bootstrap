 // url do via cep: https://viacep.com.br/ws/01001000/json/
// Gerador de Cep

 $(function(){
 	$('#formulario').submit(function(){
 		let cep = $('#cep').val();
 		let cep2 = cep.replace('-','');
 		const urlCep = `https://viacep.com.br/ws/${cep2}/json/`;
 		const serialize = $('#formulario').serialize();

 		$.ajax({
 			url:urlCep,
 			type:'get',
 			data:serialize,
 			dataType:'json',
 			success:function(data){
 				console.log(data)
 				$("#bairro").val(data.bairro);
 				$("#cep2").val(data.cep);
 				$("#ibge").val(data.ibge);
 				$("#localidade").val(data.localidade);
 				$("#logradouro").val(data.logradouro);
 				$("#uf").val(data.uf);
 				$("#complemento").val(data.complemento);

 				$("#cep").val('');

 				alert(
 					`Bairro:${data.bairro}\nCep:${data.cep}\n
 					Cidade:${data.localidade}\nRua:${data.logradouro}\n
 					UF:${data.uf}`
 					);
 			},
 			error:function(error){
 				console.log(error)
 			}
 		})
 		return false;
 	})
 });

 jQuery(function($){
 	$("#cep").mask("99999-999");
 });