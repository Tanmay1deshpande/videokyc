package com.sample1.firstsp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface FormDataRepository extends JpaRepository<FormData, Long> {
}
