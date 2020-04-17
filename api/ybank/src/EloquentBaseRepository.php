<?php

namespace Ybank;

use Ybank\EloquentBaseModel as Model;

class EloquentBaseRepository implements BaseRepositoryInterface
{
    /**
     * @var Model
     */
    protected $model;

    /**
     * BaseRepository constructor.
     *
     * @param  Model  $model
     */
    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    /**
     * @param $id
     * @return iterable
     */
    public function findById($id)
    {
        return $this->model->findOrFail($id);
    }
}

