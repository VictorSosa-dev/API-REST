package com.dog.springboot.backend.apirest.moldels.dao;

import org.springframework.data.repository.CrudRepository;

import com.dog.springboot.backend.apirest.models.entity.Cliente;

public interface IClienteDao extends CrudRepository<Cliente, Long> {

}
