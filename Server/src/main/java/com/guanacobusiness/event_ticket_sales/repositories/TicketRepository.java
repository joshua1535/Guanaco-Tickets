package com.guanacobusiness.event_ticket_sales.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.guanacobusiness.event_ticket_sales.models.entities.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, UUID>{
    
}
