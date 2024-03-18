package com.sample1.firstsp;
//import javax.persistence.*;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "form_data")
public class FormData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String Business_Description;
    
    private String step1;
    private String step2;
    private String step3;
    private String step4;
    private String step5;
    private String step6;
    private String step7;
    private String step8;
   

    // Constructors, getters, and setters
    // Constructor(s)
    public FormData() {
    }

    public FormData(String Business_Description, String step1, String step2, String step3, String step4,
                    String step5, String step6, String step7, String step8) {
        this.Business_Description = Business_Description;
        this.step1 = step1;
        this.step2 = step2;
        this.step3 = step3;
        this.step4 = step4;
        this.step5 = step5;
        this.step6 = step6;
        this.step7 = step7;
        this.step8 = step8;
        
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBusiness_Description() {
        return Business_Description;
    }

    public void setBusiness_Description(String Business_Description) {
        this.Business_Description = Business_Description;
    }

    public String getstep1() {
        return step1;
    }

    public void setstep1(String step1) {
        this.step1 = step1;
    }
  

    public String getstep2() {
        return step2;
    }

    public void setstep2(String step2) {
        this.step2 = step2;
    }
   
    public String getstep3() {
        return step3;
    }

    public void setstep3(String step3) {
        this.step3 = step3;
    }
   
    public String getstep4() {
        return step4;
    }

    public void setstep4(String step4) {
        this.step4 = step4;
    }
  
    public String getstep5() {
        return step5;
    }

    public void setstep5(String step5) {
        this.step5 = step5;
    }
    
    public String getstep6() {
        return step6;
    }

    public void setstep6(String step6) {
        this.step6 = step6;
    }
   
    public String getstep7() {
        return step7;
    }

    public void setstep7(String step7) {
        this.step7 = step7;
    }

    public String getstep8() {
        return step8;
    }

    public void setstep8(String step8) {
        this.step8 = step8;
    }

    @Override
    public String toString() {
        return "FormData [id=" + id + ", Business_Description=" + Business_Description + ", step1=" + step1 + ", step2="
                + step2 + ", step3=" + step3 + ", step4=" + step4 + ", step5=" + step5
                + ", step6=" + step6 + ", step7=" + step7 + ", step8=" + step8 + "]";
    }
  

}
