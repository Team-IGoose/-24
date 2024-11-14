package com.future24.server.future24.storeInformation.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StoreInformationVO {

    private String store_name;
    private String business_number;
    private String branch_name;
    private String category_code_large;
    private String category_name_large;
    private String category_code_medium;
    private String category_name_medium;
    private String category_code_small;
    private String category_name_small;
    private String industry_code_standard;
    private String industry_name_standard;
    private String city_code;
    private String city_name;
    private String district_code;
    private String district_name;
    private String admin_district_code;
    private String admin_district_name;
    private String legal_district_code;
    private String legal_district_name;
    private String land_code;
    private String land_category_code;
    private String land_category_name;
    private String main_land_number;
    private String sub_land_number;
    private String land_address;
    private String road_code;
    private String road_name;
    private String building_main_number;
    private String building_sub_number;
    private String building_management_number;
    private String building_name;
    private String road_address;
    private String old_postal_code;
    private String new_postal_code;
    private String dong_info;
    private String floor_info;
    private String room_info;
    private String longitude;
    private String latitude;
}
