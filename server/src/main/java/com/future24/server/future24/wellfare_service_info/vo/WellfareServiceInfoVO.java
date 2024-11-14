package com.future24.server.future24.wellfare_service_info.vo;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WellfareServiceInfoVO {

    private String service_name;             // 서비스 이름
    private String service_code;             // 서비스 코드
    private String url;                      // 서비스 URL
    private String service_description;      // 서비스 설명
    private String site;                     // 사이트 정보
    private String phone_number;             // 전화번호
    private String manage_department;        // 관리 부서 코드
    private String manage_department_name;   // 관리 부서 이름
    private String year;
}
