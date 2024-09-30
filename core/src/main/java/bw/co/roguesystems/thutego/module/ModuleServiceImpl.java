// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.roguesystems.thutego::module::ModuleService
 * STEREOTYPE:  Service
 */
package bw.co.roguesystems.thutego.module;

import bw.co.roguesystems.thutego.PropertySearchOrder;
import bw.co.roguesystems.thutego.SortOrderFactory;
import bw.co.roguesystems.thutego.ThutegoSpecifications;

import java.util.Collection;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.roguesystems.thutego.module.ModuleService
 */
@Service("moduleService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class ModuleServiceImpl
    extends ModuleServiceBase
{
    public ModuleServiceImpl(
        ModuleDao moduleDao,
        ModuleRepository moduleRepository,
        MessageSource messageSource
    ) {
        
        super(
            moduleDao,
            moduleRepository,
            messageSource
        );
    }

    /**
     * @see bw.co.roguesystems.thutego.module.ModuleService#findById(Long)
     */
    @Override
    protected ModuleVO handleFindById(Long id)
        throws Exception
    {
        return this.getModuleDao().toModuleVO(this.getModuleRepository().getReferenceById(id));
    }

    /**
     * @see bw.co.roguesystems.thutego.module.ModuleService#getAll()
     */
    @Override
    protected Collection<ModuleListVO> handleGetAll()
        throws Exception
    {
        
        return this.getModuleDao().toModuleListVOCollection(this.getModuleRepository().findAll());
    }

    /**
     * @see bw.co.roguesystems.thutego.module.ModuleService#remove(Long)
     */
    @Override
    protected boolean handleRemove(Long id)
        throws Exception
    {

        this.getModuleRepository().deleteById(id);
        return true;
    }

    /**
     * @see bw.co.roguesystems.thutego.module.ModuleService#save(ModuleVO)
     */
    @Override
    protected ModuleVO handleSave(ModuleVO module)
        throws Exception
    {

        Module entity = this.getModuleDao().moduleVOToEntity(module);
        entity = this.getModuleRepository().save(entity);

        return this.getModuleDao().toModuleVO(entity);
    }

    /**
     * @see bw.co.roguesystems.thutego.module.ModuleService#search(ModuleSearchCriteria, Set<PropertySearchOrder>)
     */
    @Override
    protected Collection<ModuleListVO> handleSearch(ModuleSearchCriteria criteria, Set<PropertySearchOrder> orderings)
        throws Exception
    {
        Specification<Module> spec = null;

        if(criteria.getCurrriculumId() != null) {

            spec = ThutegoSpecifications.<Module, Long>findByAttributeEquals(criteria.getCurrriculumId(), "curriculum", "id");
        }

        if(StringUtils.isNotBlank(criteria.getCode())) {
            
            Specification<Module> codeSpec = ThutegoSpecifications.findByAttributeLikeIgnoreCase(criteria.getCode(), "code");

            if(spec == null) {

                spec = codeSpec;
            } else {

                spec = spec.and(codeSpec);
            }
        }

        if(StringUtils.isNotBlank(criteria.getName())) {

            Specification<Module> nameSpec = ThutegoSpecifications.findByAttributeLikeIgnoreCase(criteria.getName(), "name");

            if(spec == null) {

                spec = nameSpec;
            } else {

                spec = spec.and(nameSpec);
            }
        }

        if(criteria.getType() != null) {

            Specification<Module> typeSpec = ThutegoSpecifications.<Module, ModuleType>findByAttributeEquals(criteria.getType(), "type");

            if(spec == null) {

                spec = typeSpec;
            } else {

                spec = spec.and(typeSpec);
            }
        }

        Sort sort = SortOrderFactory.createSortOrder(orderings);

        if(sort == null) {

            return this.getModuleDao().toModuleListVOCollection(this.getModuleRepository().findAll(spec));
        }   

        return this.getModuleDao().toModuleListVOCollection(this.getModuleRepository().findAll(spec, sort));
    }

    /**
     * @see bw.co.roguesystems.thutego.module.ModuleService#findCurriculumModules(Long)
     */
    @Override
    protected Collection<ModuleListVO> handleFindCurriculumModules(Long curriculumId)
        throws Exception
    {

        return this.getModuleRepository().findCurriculumModules(curriculumId);
    }

}