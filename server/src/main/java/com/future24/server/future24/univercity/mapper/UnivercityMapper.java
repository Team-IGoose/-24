package com.future24.server.future24.univercity.mapper;

import com.future24.server.future24.univercity.vo.UnivercityVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UnivercityMapper {

    @Select("SELECT * FROM univercity " +
            "WHERE universe LIKE #{startValue} || '%'")
    List<UnivercityVO> findByUniverse(
            String startValue
    );
}
