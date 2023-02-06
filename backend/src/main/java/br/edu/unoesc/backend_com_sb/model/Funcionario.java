package br.edu.unoesc.backend_com_sb.model;

import java.math.BigDecimal;
import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Funcionario {
	private Long id;
	private String nome;
	private Integer numerodedependentes;
	private BigDecimal salario;
	private Date datanascimento;
}
