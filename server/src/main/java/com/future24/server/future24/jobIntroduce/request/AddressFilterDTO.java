package com.future24.server.future24.jobIntroduce.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.w3c.dom.Text;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AddressFilterDTO {
    private String startValue;
    private String includeValue;
}
