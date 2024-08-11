# == This code was created by https://noauto-nolife.com/post/django-auto-create-models-forms-admin/ == #

from rest_framework import serializers
from .models import Workplace,Assignment,Supplier,ProductCategory,Product,ProductImage,Material,Item,ItemMaterial,Order,Process,Progress

class WorkplaceSerializer(serializers.ModelSerializer):
    class Meta:
        model	= Workplace
        fields	= [ "id","name", "address", "phone_number" ]

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model	= Assignment
        fields	= [ "id","user", "workplace" ]

class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model	= Supplier
        fields	= [ "id","name", "address", "phone_number" ]

class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model	= ProductCategory
        fields	= [ "id","name" ]

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model	= Product
        fields	= [ "product_code", "name", "category", "description", "weight", "size", "price" ]

class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model	= ProductImage
        fields	= [ "id","product", "image" ]

class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model	= Material
        fields	= [ "id","supplier", "name", "stock", "unit" ]

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model	= Item
        fields	= [ "id","product", "product_date", "sold_date", "item_material" ]

class ItemMaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model	= ItemMaterial
        fields	= [ "id","item", "material", "quantity" ]

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model	= Order
        fields	= [ "id","item", "ordered_material", "workplace", "order_date", "delivery_date" ]

class ProcessSerializer(serializers.ModelSerializer):
    class Meta:
        model	= Process
        fields	= [ "id","operation", "workplace" ]

class ProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model	= Progress
        fields	= [ "id","item", "process", "start_date", "due_date", "end_date", "confirmor" ]

