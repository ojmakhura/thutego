// license-header java merge-point
/**
 * This is only generated once! It will never be overwritten.
 * You can (and have to!) safely modify it by hand.
 * TEMPLATE:    SpringServiceImpl.vsl in andromda-spring cartridge
 * MODEL CLASS: AndroMDAModel::backend::bw.co.roguesystems.thutego::access::type::AccessPointTypeService
 * STEREOTYPE:  Service
 */
package bw.co.roguesystems.thutego.access.type;

import bw.co.roguesystems.thutego.PropertySearchOrder;
import bw.co.roguesystems.thutego.SearchObject;
import bw.co.roguesystems.thutego.SortOrderFactory;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Set;
import org.springframework.context.MessageSource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @see bw.co.roguesystems.thutego.access.type.AccessPointTypeService
 */
@Service("accessPointTypeService")
@Transactional(propagation = Propagation.REQUIRED, readOnly=false)
public class AccessPointTypeServiceImpl
    extends AccessPointTypeServiceBase
{
    public AccessPointTypeServiceImpl(
        AccessPointTypeDao accessPointTypeDao,
        AccessPointTypeRepository accessPointTypeRepository,
        MessageSource messageSource
    ) {
        
        super(
            accessPointTypeDao,
            accessPointTypeRepository,
            messageSource
        );
    }

    /**
     * @see bw.org.bocra.portal.access.type.AccessPointTypeService#findById(Long)
     */
    @Override
    protected AccessPointTypeDTO handleFindById(Long id)
            throws Exception {
        AccessPointType type = getAccessPointTypeDao().load(id);
        return getAccessPointTypeDao().toAccessPointTypeDTO(type);

    }

    /**
     * @see bw.org.bocra.portal.access.type.AccessPointTypeService#save(AccessPointTypeDTO)
     */
    @Override
    protected AccessPointTypeDTO handleSave(AccessPointTypeDTO accessPointType)
            throws Exception {
        AccessPointType entity = getAccessPointTypeDao().accessPointTypeDTOToEntity(accessPointType);
        entity = accessPointTypeRepository.saveAndFlush(entity);

        if (accessPointType.getId() == null) {
            accessPointType = getAccessPointTypeDao().toAccessPointTypeDTO(entity);
        }

        return accessPointType;
    }

    /**
     * @see bw.org.bocra.portal.access.type.AccessPointTypeService#remove(Long)
     */
    @Override
    protected boolean handleRemove(Long id)
            throws Exception {

        accessPointTypeDao.remove(id);

        return true;
    }

    /**
     * @see bw.org.bocra.portal.access.type.AccessPointTypeService#getAll()
     */
    @Override
    protected Collection<AccessPointTypeDTO> handleGetAll()
            throws Exception {
        return (Collection<AccessPointTypeDTO>) getAccessPointTypeDao()
                .loadAll(AccessPointTypeDao.TRANSFORM_ACCESSPOINTTYPEDTO);
    }

    /**
     * @see bw.org.bocra.portal.access.type.AccessPointTypeService#search(String)
     */
    @Override
    protected Collection<AccessPointTypeDTO> handleSearch(String criteria, Set<PropertySearchOrder> orderings)
            throws Exception {
        Collection<AccessPointType> types = accessPointTypeDao.findByCriteria(criteria);
        Collection<AccessPointTypeDTO> vos = new ArrayList<>();

        if(types == null) {

            return vos;
        }

        for (AccessPointType type : types) {
            vos.add(getAccessPointTypeDao().toAccessPointTypeDTO(type));
        }

        return vos;
    }

    /**
     * @see bw.org.bocra.portal.access.type.AccessPointTypeService#getAll(Integer,
     *      Integer)
     */
    @Override
    protected Page<AccessPointTypeDTO> handleGetAll(Integer pageNumber, Integer pageSize)
            throws Exception {

        Page<AccessPointType> types = accessPointTypeRepository.findAll(PageRequest.of(pageNumber, pageSize));

        return types.map(type -> getAccessPointTypeDao().toAccessPointTypeDTO(type));
    }

    @Override
    protected Page<AccessPointTypeDTO> handleSearch(SearchObject<String> criteria)
            throws Exception {
        
        Sort sort = SortOrderFactory.createSortOrder(criteria.getSortings()); 
        Pageable pageable = 
            sort == null ?
            PageRequest.of(criteria.getPageNumber(), criteria.getPageSize()) :
            PageRequest.of(criteria.getPageNumber(), criteria.getPageSize(), sort);

        Page<AccessPointType> types = accessPointTypeRepository.findByNameContainingIgnoreCase(criteria.getCriteria(), pageable);

        if(types == null) {

            return null;
        }
        
        return types.map(type -> getAccessPointTypeDao().toAccessPointTypeDTO(type));
    }
}