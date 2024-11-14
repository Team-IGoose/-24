package com.future24.server.future24.wellfare_service_info.mapper;

import com.future24.server.future24.wellfare_service_info.vo.WellfareServiceInfoVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface WellfareServiceInfoMapper {

    @Select({
            "<script>",
            "SELECT * FROM wellfare_service_info",
            "WHERE",
            "<foreach item='keyword' collection='keywords' open='(' separator='OR' close=')'>",
            "service_description LIKE CONCAT('%', #{keyword}, '%')",
            "</foreach>",
            "</script>"
    })
    List<WellfareServiceInfoVO> findByServiceDescriptionKeywords(@Param("keywords") List<String> keywords);
}
