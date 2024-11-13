package com.future24.server.future24.storeInformation.mapper;

import com.future24.server.future24.storeInformation.vo.StoreInformationVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface StoreInformationMapper {

    @Select("SELECT * FROM store_information WHERE (district_name = #{startValue})" )
    List<StoreInformationVO> findByDistrictName(String startValue);
}
