package com.future24.server.future24.jobIntroduce.service;

import com.future24.server.future24.jobIntroduce.mapper.JobIntroduceMapper;
import com.future24.server.future24.jobIntroduce.vo.JobIntroduceVO;
import com.future24.server.future24.jobSupport.mapper.JobSupportMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.w3c.dom.Text;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JobIntroduceService {

    private final JobIntroduceMapper jobIntroduceMapper;

    public List<JobIntroduceVO> getFilterData(String startValue, String includeValue) {
        return jobIntroduceMapper.findByAddress(startValue, includeValue);
    }
}
