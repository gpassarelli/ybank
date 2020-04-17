<?php

namespace Ybank;

use Ybank\EloquentBaseModel as Model;


class EloquentBaseService implements BaseServiceInterface
{
    /**
     * @var Model
     */
    protected $model;

    /**
     * BaseService constructor.
     *
     * @param  Model  $model
     */
    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    /**
     * Creates a new model
     *
     * @param  array  $data
     * @return BaseModelInterface
     */
    public function create(array $data): Model
    {
        return $this->model->create($data);
    }
}
