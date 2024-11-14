package com.future24.server.future24.jobIntroduce.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.w3c.dom.Text;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JobIntroduceVO {

    private String num;
    private String service_name;
    private String service_id;
    private String code;
    private String manage_num;
    private String status_code;
    private String status;
    private String detail_status_code;
    private String detail_status;
    private String phone_number;
    private String location_area;
    private String location;
    private String address;
    private String load_address;
    private String load_postal_code;
    private String business_name;
    private String is_update;
    private String update_date;
    private String location_info_x;
    private String location_info_y;
    private String is_corporate;
}
